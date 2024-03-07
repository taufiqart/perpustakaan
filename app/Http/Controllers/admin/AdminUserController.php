<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\ClassRoom;
use App\Models\IdentityType;
use App\Models\Major;
use App\Models\MemberType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AdminUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response| \Inertia\Response
     */
    public function index(Request $request)
    {
        $users = User::query();
        if ($request->has('search')) {
            $users->search($request->query('search'));
        }
        $users = $users->latest()->paginate(10);
        $users->appends($request->query());
        return Inertia::render('admin/Users/Index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response| \Inertia\Response
     */
    public function create()
    {
        $majors = Major::orderBy('major')->get();
        $class_rooms = ClassRoom::orderBy('class')->get();
        $gender = getGenderOption();
        $member_types = MemberType::get();
        $identity_types = IdentityType::get();
        return Inertia::render('admin/Users/Create', compact("majors", "class_rooms", "gender", "identity_types", "member_types"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response | \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validateUser = Validator::make($request->all(), [
            "email" => "required|email|unique:users",
            "password" => "required|min:6",
            "user_detail" => "required"
        ]);

        if ($validateUser->fails()) {
            return back()->withErrors($validateUser->errors());

        }

        $validateUserDetail = Validator::make($request->user_detail, [
            "address" => "required",
            "full_name" => "required",
            "identity_type_id" => "required",
            "identity" => "required",
            "member_type_id" => "required",
            "gender" => "required",
            "place_of_birth" => "required",
            "date_of_birth" => "required",
            "phone_number" => "nullable",
            "class_room_id" => "nullable",
            "major_id" => "nullable",
            "avatar" => "nullable|max:2048"
        ]);

        if ($validateUserDetail->fails()) {
            return back()->withErrors($validateUserDetail->errors());

        }

        $request->{"_user_detail"} = $request->user_detail;
        $request->user_detail = json_decode(json_encode($request->user_detail));

        try {
            \DB::beginTransaction();
            $user = User::create([
                "email" => $request->email,
                "name" => $request->user_detail->full_name,
                "password" => bcrypt($request->password),
            ]);
            $avatar = "https://robohash.org/set_set2/bgset_bg2/" . md5($request->email);

            if (!empty($request->user_detail->avatar)) {
                $_avatar = $request->_user_detail["avatar"];
                $__avatar = env("USER_LOCATION") . randomFilename($_avatar->clientExtension());
                if (move_uploaded_file($_avatar->getPathname(), public_path($__avatar))) {
                    $avatar = $__avatar;
                }
            }

            $user->user_detail()->create([
                "address" => $request->user_detail->address,
                "full_name" => $request->user_detail->full_name,
                "identity_type_id" => $request->user_detail->identity_type_id,
                "identity" => $request->user_detail->identity,
                "member_type_id" => $request->user_detail->member_type_id,
                "gender" => $request->user_detail->gender,
                "place_of_birth" => $request->user_detail->place_of_birth,
                "date_of_birth" => $request->user_detail->date_of_birth,
                "phone_number" => $request->user_detail->phone_number,
                "class_room_id" => $request->user_detail->class_room_id,
                "major_id" => $request->user_detail->major_id,
                "avatar" => $avatar,
            ]);

            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollBack();
            if (!empty($request->user_detail->avatar)) {
                unlink($avatar);
            }
            return back()->with(['error' => 'Error created']);
        }

        return back()->with(['success' => 'Success created']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
